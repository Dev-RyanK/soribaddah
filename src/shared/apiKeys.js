import instance from "./instance"

const apiKeys = {
  /*   readPostList: async (err) => {
    try {
      await instance.get(`/api/music`)
    } catch {
      console.log(err)
    }
  }, */
  // 상세 페이지
  /*   readPost: async () => {
    try {
      await instance.get(`/api/music`)
    } catch (error) {
      console.log(error)
      return
    }
  },
  // 게시물 수정
  updatePost: async (musicId, edit) => {
    try {
      await instance.patch(`/api/music/${musicId}`, edit)
    } catch {
      console.log(`403 error`)
      return
    }
  },
  // 댓글 읽어오기
  readComments: async () => {
    try {
      await instance.get(`/api/comment`)
    } catch {
      return
    }
  },
  // 댓글 작성하기 이거 slice 단에 쓰나???
  createComment: async (musicId, payload) => {
    try {
      await instance.post(`/api/comment/${musicId}`, payload)
    } catch {
      return
    }
  },
  // 댓글 수정하기
  updateComment: async (musicId, commentId) => {
    try {
      await instance.patch(`/api/comment/${musicId}/${commentId}`)
    } catch {
      return
    }
  }, */
}

export default apiKeys
