
// PATCH API
export async function PATCH(request, {params}) {

    console.log(params.id)
    const body = await request.json()

    const index = comments.findIndex((comment) => comment.id === parseInt(params.id))

    comments[index] = {
        text: body.text
    }

    return Response.json({
        message: 'Comment Updated successfully',
        comments
    })
}


// DELETE API
export async function DELETE(request, {params}) {

    const newComment = comments.filter((comment) => comment.id !== parseInt(params.id))

    return Response.json({
        message: 'Comment Deleted successfully',
        newComment
    })

}




const comments = [
    {
        id: 1,
        text: "comment 1"
    },
    {
        id: 2,
        text: "comment 2"
    },
    {
        id: 3,
        text: "comment 3"
    },
]