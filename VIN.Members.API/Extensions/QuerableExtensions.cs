using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using VIN.Members.API.Infrastructure;

namespace VIN.Members.API.Extensions
{
    public static class QuerableExtensions
    {
        public static async Task<PagedResult<T>> ToPagedList<T>(this IQueryable<T> query,PagingInfo pagingInfo) where T : class
        {
            var pageSize = pagingInfo.PageSize;
            var pageNumber = pagingInfo.PageNumber;

            var result = new PagedResult<T>
            {
                CurrentPage = pageNumber,
                PageSize = pageSize,
                RowCount = query.Count()
            };


            var pageCount = (double)result.RowCount / pageSize;
            result.PageCount = (int)Math.Ceiling(pageCount);

            var skip = (pageNumber - 1) * pageSize;

            result.Data = await query
                    .Skip(skip)
                    .Take(pageSize)
                    .ToListAsync()
                    .ConfigureAwait(false);

            return result;
        }

        public static IQueryable<T> OrderBy<T>(this IQueryable<T> source, Expression<Func<T, object>> keySelector, bool ascending)
        {
            var selectorBody = keySelector.Body;

            // Strip the Convert expression
            if (selectorBody.NodeType == ExpressionType.Convert)
                selectorBody = ((UnaryExpression)selectorBody).Operand;
            
            // Create dynamic lambda expression
            var selector = Expression.Lambda(selectorBody, keySelector.Parameters);
            
            // Generate the corresponding Queryable method call
            var queryBody = Expression.Call(typeof(Queryable),
                ascending ? "OrderBy" : "OrderByDescending",
                new Type[] { typeof(T), selectorBody.Type },
                source.Expression, Expression.Quote(selector));

            return source.Provider.CreateQuery<T>(queryBody);
        }
    }
}
