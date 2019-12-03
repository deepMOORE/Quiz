export class TableGenerator {
    generateColumn(index, question) {
        return this._getColumn(index, question.text, question.type, question.createdAt)
    }

    _getColumn(index, text, type, createdAt) {
        return `<tr>
        <th scope="row">${index}</th>
        <td>${text}</td>
        <td>${type}</td>
        <td><span>${createdAt}</span></td>
        <td>
          <a href="" class="btn btn-light">
            <i class="fas fa-pencil-alt"></i>
          </a>

          <button type="button" class="btn btn-danger">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>`;
    }
}