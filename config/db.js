const mongoose=require('mongoose')


const dbConnect=async()=>{
   try {
      const conn=await mongoose.connect(process.env.MONGO_URI,{
         useNewUrlParser:true,
         useFindAndModify:false,
         useUnifiedTopology:true
      })
      if(conn){
         console.log('DB CONNECTION SUCCESSFUL!')
      }
   } catch (error) {
      console.warn('DB NOT CONNECTED!')
   }
}

export default dbConnect