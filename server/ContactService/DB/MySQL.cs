using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;

namespace ContactService.DB
{
    /// <summary>
    /// Database connection for MySQL
    /// </summary>
    public class MySQL : Database
    {
        private MySqlConnection _connection;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="parameters"></param>
        public MySQL(ConnectionParameters parameters)
        {
            var connectionString = "Server="+parameters["host"]+";Database="+parameters["db"]+";Uid="+parameters["uid"]+";Pwd="+parameters["pwd"]+";";
            _connection = new MySqlConnection(connectionString);
            _connection.Open();
        }

        /// <summary>
        /// Close database conenction
        /// </summary>
        public override void Close()
        {
            _connection.Close();
        }

        /// <summary>
        /// Execute select, return results as List of array of strings
        /// </summary>
        /// <param name="sql"></param>
        /// <returns></returns>
        public override List<string[]> Query(string sql)
        {
            var cmd = new MySqlCommand(sql, _connection);
            var rdr = cmd.ExecuteReader();

            var result = new List<string[]>();

            var columns = rdr.FieldCount;

            while (rdr.Read())
            {
                var row = new string[columns];
                for (int i = 0; i < columns; i++)
                {
                    row[i] = rdr.GetString(i);
                }
                result.Add(row);
            }

            rdr.Close();

            return result;
        }

        /// <summary>
        /// Execute insert/update/delete, return number of rows affected
        /// </summary>
        /// <param name="sql"></param>
        /// <returns></returns>
        public override int Update(string sql)
        {
            var cmd = new MySqlCommand(sql, _connection);
            var i = cmd.ExecuteNonQuery();

            return i;
        }

    }
}