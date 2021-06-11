const getDateOfPublished = publishedAt => {
    let date = new Date(publishedAt);  
    const plusZero =  n => {
        if (n < 10)
            return "0" + n;
        return n;
    };
    let dateOfPublished = {
        mounth : plusZero(date.getMonth() + 1),
        day : plusZero(date.getDate())
    };
    return dateOfPublished;   
};

export default getDateOfPublished; 
