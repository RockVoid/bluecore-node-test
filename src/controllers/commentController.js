const CommentService = require('../service/commentService')

module.exports = class CommentController {
  // TODO: Criar metodo que retorna a lista de comentarios no banco de dados
  static list (request, response, next) {
    CommentService.list()
      .then((unities) => response.status(200).send(unities))
      .catch(next)
  }

  static listById (request, response, next) {
    const idToNumber = parseInt(request.params.id)
    CommentService.listById(idToNumber)
      .then((unities) => response.status(200).send(unities))
      .catch(next)
  }

  static createComment (request, response, next) {
    // Testando create Comment
    const { user, comment } = request.body
    const postId = request.params.postId
    CommentService.createComment(user, comment, postId)
      .then((unities) => {
        response.status(200).send(unities)
      })
      .catch(next)
  }
}
