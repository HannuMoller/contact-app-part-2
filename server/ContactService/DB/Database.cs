using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace ContactService.DB
{
    public abstract class Database
    {

        /// <summary>
        /// Create and return database conenction object
        /// </summary>
        /// <returns></returns>
        public static Database GetConnection()
        {
            var parameters = new ConnectionParameters();

            if (parameters["engine"].ToLower().Equals("mysql"))
            {
                return new MySQL(parameters);
            }
            else if (parameters["engine"].ToLower().Equals("sql server"))
            {
                throw new Exception("Sql Server support not implemented yet!");
            }
            else
            {
                throw new Exception("No database!");
            }
        }

        /// <summary>
        /// Close database conenction
        /// </summary>
        public abstract void Close();

        /// <summary>
        /// Execute select in database
        /// </summary>
        /// <param name="sql"></param>
        /// <returns></returns>
        public abstract List<string[]> Query(string sql);

        /// <summary>
        /// Execute insert/update/delete in database
        /// </summary>
        /// <param name="sql"></param>
        /// <returns></returns>
        public abstract int Update(string sql);
    }
}
