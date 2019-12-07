export class TableGenerator {
    generateRow(index, question) {
        return this._getRow(index, question.id, question.text, question.type, question.createdAt);
    }

    _getRow(index, id, text, type, createdAt) {
        return `<tr">
        <th scope="row">${index}</th>
        <td>${text}</td>
        <td>${type}</td>
        <td><span>${createdAt}</span></td>
        <td class="edit-buttons">
          <button type="button" class="btn btn-light" data-id="${id}">
            <i class="fas fa-pencil-alt"></i>
          </button>

          <button type="button" class="btn btn-danger" data-id="${id}">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>`;
    }
}