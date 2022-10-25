function visitorControllers(){
    return{
        //homepage get
        home(req,res){
            res.render('home',{layout: 'layout/userLayout', title: 'Home'})
        },

        //aboutpage get
        about(req,res){

        },
        //
    }
}

module.exports = visitorControllers