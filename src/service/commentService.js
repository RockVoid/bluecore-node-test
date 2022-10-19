const CommentRepository = require('../repository/commentRepository')

module.exports = class CommentService {
  // TODO: Criar metodos necessarios para listar os comentrios
  static async list () {
    return await CommentRepository.list()
  }

  static async listById (id) {
    return await CommentRepository.listById(id)
  }

  static async createComment () {
    return await CommentRepository.createComment()
  }
}
