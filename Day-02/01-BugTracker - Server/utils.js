var utils = angular.module("utils", []);
    utils.value("defaultLimitLength", 20);

        utils.filter("trimText", function(defaultLimitLength){
            return function(data, limitLength){
                limitLength = limitLength || defaultLimitLength;
                return data.length> limitLength
                    ? data.substr(0,limitLength) + "..."
                    : data;
            }
        });
        utils.value("momentApi", window.moment);

        utils.filter("toMoment", function(momentApi){
           return function(data){
               return momentApi(data).fromNow();
           }
        });
