import request from '../axios';
export default {
    searchCinemasOrMovies({
                              category = "movies", keyword = '',
                              page = 1, pageSize = 10,
                              sortType = 'releaseDate'
                          }) {
        return request({
            url: `/${category}?page=${page - 1}&pageSize=${pageSize}&soetType=${sortType}&search=${keyword}`,
            method: 'get'
        })
    }
}