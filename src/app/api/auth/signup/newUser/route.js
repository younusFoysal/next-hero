// import connectDB from "@/lib/connectDB";
//
//
// export const POST = async (request) => {
//     try {
//         const db = await connectDB()
//         const userCollection = db.collection('users');
//         const newUser = await request.json()
//         const res = await userCollection.insertOne(newUser)
//         console.log(res)
//         return Response.json({message:"Successfully registered"})
//
//
//     } catch (error){
//         return Response.json({message:"Something went wrong"})
//     }
// }


import connectDB from "@/lib/connectDB";

export const POST = async (request) => {
    try {
        const db = await connectDB();
        const userCollection = db.collection('users');
        const newUser = await request.json();
        const res = await userCollection.insertOne(newUser);
        console.log(res);

        return new Response(JSON.stringify({ message: "Successfully registered" }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ message: "Something went wrong" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
