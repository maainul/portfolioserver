

export const getBlogPostsCtrl = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Get Blog Posts",
        data: "Hi Kutabasa",
    })
}

