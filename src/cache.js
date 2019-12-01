const ttl = 1000*60*60*24;

export default {

    get(key){
        let item = JSON.parse(localStorage.getItem(key));
       
        if(!item)
            return;
        
        if(item.createdAt + ttl > new Date() )
            return;
        
        delete item.createdAt;
        
        return item;            
    },

    set(key, item){
        let created = new Date();

        let newItem = {
            ...item,
            createdAt: created
        }

        localStorage.setItem(key, JSON.stringify(newItem))
    }
}