const database = require('../config/database')

module.exports = class CommentRepository {
  // TODO: Criar aqui o metodo que busca os comentarios no banco de dados
  static async list () {
    const result = await database
      .select(
        'Id',
        'PostId',
        'UserName',
        'Comment',
        'CreatedAt',
        'UpdatedAt'
      )
      .from('Comments')

    return result
  }

  static async listById (id) {
    const result = await database('Comments')
      .where('PostId', 2)

    return result
  }

  static async createComment (user, comment, id) {
    const result = await database
      .insert([
        {
          user: user,
          comment: comment
        }
      ], [id])
      .into('Comments')

    return result
  }
}
