using System;
using System.Collections.Generic;
using System.Text;

namespace VIN.Members.Domain.Infrastructure
{
    public static class Guard
    {
        public static void NotNull(object value, string argumentName)
        {
            if (value == null)
            {
                throw new ArgumentNullException(argumentName);
            }
        }

        public static void NotNullOrEmptyOrWhitespace( string value, string argumentName)
        {
            if (value == null)
            {
                throw new ArgumentNullException(argumentName);
            }
            if (string.IsNullOrEmpty(value))
            {
                throw new ArgumentException("Value cannot be an empty string.", argumentName);
            }
        }
    
       
    }
}
