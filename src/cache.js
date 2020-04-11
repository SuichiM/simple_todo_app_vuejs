export default {
    getItem:function(key){
        let value = JSON.parse(localStorage.getItem(key));

        if (! value)
            return null;

        let expirationTime = moment( value['expires_at'] );

        if( moment() > expirationTime )
            return null;

        delete value['created_at'];
        delete value['expires_at'];
        return value;

    },
    setItem:function(key, value, ttl){
        let expiration = ttl || (value && value.ttl) || 1024*60*60*24;

        value['created_at'] = moment();
        value['expires_at'] = moment( value['created_at'] ).add(expiration, 'ms');

        localStorage.setItem(key, JSON.stringify(value));
    }
}
