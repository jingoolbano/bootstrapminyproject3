class draggable {

    constructor(options) {
        this.setupList(options);


    }


    setupList(options) {
        let {list , el : element , template } = options;

        if(! element ) throw Error('the list is not exists');
        if(! list ) throw Error('the data is not exists')
        if(! Array.isArray(list)) throw Error('the list is not an array, please insert an array')
        if(! template) throw Error('please add a Tempalte function')
        if(typeof template !== "function") throw Error('please add a function as template') 

        list.forEach(item => element.innerHTML += template(item))
    }

}