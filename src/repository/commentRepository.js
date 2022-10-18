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
      .where({ 'Comments.Id': id })
      .first()

    return result
  }
}