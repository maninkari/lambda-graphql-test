'use strict';

const axios = require('axios');

const UtilisationController = {

    index: (args) => {
        const URL = `http://localhost:8888/analytics-cache/tenants/643/costDrilldown?period=month`;
        console.log(URL);

        return axios.get(URL)
            .then((response) => {
                const utilisation = response.data;
                return response.data;
            })
            .catch((error) => {
                return {error: error}
            });
    },
};

module.exports = UtilisationController;
