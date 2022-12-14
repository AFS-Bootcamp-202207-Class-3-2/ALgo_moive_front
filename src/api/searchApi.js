import request from './api';
const searchApi =  {
    searchCinemasOrMovies({
                              category = "movies", keyword = '',
                              page = 1, pageSize = 10,
                              sortType = 'score'
                          }) {
        return request({
            url: `/${category}?page=${page - 1}&pageSize=${pageSize}&sortType=${sortType}&search=${keyword}`,
            method: 'get'
        })
    }
}
export default searchApi