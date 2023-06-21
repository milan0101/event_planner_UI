import "../config";

const {
    getVolunteering ,getEvent
} = config.routes;

export const getEventGET = (payload) =>{
    return  axios[methodType](`${url}`, payload, options)
    .then((response) => {
      if (response.status === 200) return { success: true, data: response.data };
      return { success: false };
    });({
        url: getBiToken,
        methodType: 'get',
        payload: { params: payload }
      });
}