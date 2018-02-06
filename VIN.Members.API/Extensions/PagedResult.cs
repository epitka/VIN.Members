using System.Collections.Generic;

namespace VIN.Members.API.Extensions
{
    public class PagedResult<T>
    {
        public int CurrentPage { get; set; }
        public int RowCount { get; set; }
        public int PageSize { get; set; }
        public int PageCount { get; set; }
        public IEnumerable<T> Data { get; set; }
    }
}
