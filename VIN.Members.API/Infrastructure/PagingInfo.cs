namespace VIN.Members.API.Infrastructure
{
    public class PagingInfo
    {
        private const int MaxPageSize = 20;

        public PagingInfo(int pageSize, int pageNumber)
        {
            PageSize = (pageSize > MaxPageSize) ? MaxPageSize : pageSize;

            if (PageSize < 10) PageSize = 10;

            PageNumber = pageNumber;

            if (pageNumber < 1) PageNumber = 1;

        }

        public int PageNumber { get; }

        public int PageSize { get; } 

      
    }
}
