using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Web.Script.Serialization;

namespace ContactService.DB
{

    /// <summary>
    /// Database specific connection parameters.
    /// Keywords:
    /// - engine: specifies which kind of database to use (eg MySQL)
    /// - uid: user id or name
    /// - pwd: password
    /// - all other keywords depends on which kind of database is to be used
    /// </summary>
    public class ConnectionParameters
    {
        private const string SETUPFILE = "d:/dev/web-technologies/contacts-app-part-2/server/ContactService/DB/db.json";

        private Dictionary<string, string> _parameters;

        public ConnectionParameters()
        {
            var json = File.ReadAllText(SETUPFILE);
        
            var serializer = new JavaScriptSerializer(); //using System.Web.Script.Serialization;

            _parameters = serializer.Deserialize<Dictionary<string, string>>(json);
        }

        /// <summary>
        /// indexing operator
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public string this[string key]
        {
            get { return _parameters[key]; }
        }

    }
}