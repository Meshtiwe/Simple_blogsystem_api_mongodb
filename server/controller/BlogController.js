
const Blog= require('../model/BlogModel.js')



exports.create=async (req,res)=>{



try {
    
const title=req.body.title;
const body = req.body.body;
const imag = req.body.imag;
const userid = req.body.userid;

//تحقق من البيانات الفارغة 
if(!title||!body||!imag||!userid){
   return res.json({
    msg:"please insert a title",
    state:0,
    data:[]

   });
}
    await Blog.create({
    title:title,
    body:body,
    imag:imag,
    createdby:userid,
    date : new Date()      
}).then((data)=>{
return res.json({
    msg:"blog created successfully",
    state:1,
    data:data    
})
}).catch((err)=>{
    console.log(err);
return res.json({
    msg:"internal server error " + err,
    state:0,
    data:[]    
})
})
} catch (error) {
    console.log(error);
return res.json({
    msg:"internal server error " + error,
    state:0,
    data:[]    
})
}


}


exports.getall=async (req,res)=>{
try {
    const get = await Blog.find();

    if(get){
        return res.json({
            msg:"data found",
            state:1,
            data:get
        })
    }

    return res.json({
        msg:"can't find any blog with this id",
        state:0,
        data:[]
    })
} catch (error) {
    Console.log(error);
  return res.json({
        msg:"internal server error ",
        state:0,
        data:[]
    })   
}


}



exports.getbyid=async (req,res)=>{

    try {
        const id=req.params.id;
        const getblog=await Blog.findById({_id:id});   //اي دالة متعرفش شن تأخد ابحث عنها في google
        if(getblog){
        return res.json({
            msg:"data found",
            state:1,
            data:getblog
        })
    }
    
    return res.json({
        msg:"can't find any blog with this id",
        state:0,
        data:[]
    })
    
    } catch (error) {
 Console.log(error);
  return res.json({
        msg:"internal server error ",
        state:0,
        data:[]
    })          
    }

}


exports.getallbyid = async(req,res)=>{

 try {
        

        const getallid=await Blog.find({createdby:req.params.id});   
        if(getallid){
        return res.json({
            msg:"data found",
            state:1,
            data:getallid
        })
    }
    
    return res.json({
        msg:"can't find any blog with this id",
        state:0,
        data:[]
    })
    
    } catch (error) {
 Console.log(error);
  return res.json({
        msg:"internal server error ",
        state:0,
        data:[]
    })          
    }


}




exports.update=async(req,res)=>{

    
    try {
        const updatedBlog = await Blog.findOneAndUpdate(
            { _id: req.params.id }, // البحث عن التدوينة بالـ ID
            { title: req.body.title }, // التحديث فقط لحقل title
            { new: true } // لإرجاع التدوينة بعد التحديث
        );

        if (!updatedBlog) {
            return res.json({
                msg: "No blog found with this ID",
                state: 0,
                data: []
            });
        }

        return res.json({
            msg: "Blog updated successfully",
            state: 1,
            data: [updatedBlog]
        });
    } catch (error) {
        console.error(error);
        return res.json({
            msg: "Internal server error: " + error.message,
            state: 0,
            data: []
        });
    }
};








exports.delete=async (req,res)=>{

try {
    await Blog.findOneAndDelete({_id:req.params.id      
    }).then(()=>{
    return res.json({
        msg:"Blog deleted successfully",
        state:1,
        data:[]
    })
}).catch((err)=>{
    console.log(err);
return res.json({
    msg:"Blog not deleted " + err,
    state:0,
    data:[]    
})
})
} catch (error) {
    console.log(error);
return res.json({
    msg:"internal server error " + error,
    state:0,
    data:[]    
})
}

}
