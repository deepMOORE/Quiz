export class FormGenerator {
    generateInputField() {
        return this._getInputField();
    }

    generateDefaultInputGroup() {
        return this._getDefaultBox();
    }

    _getDefaultBox() {
        return `
            <div class="add-box">
              <input type="text" class="form-control input-text-first answer"/>
            </div>`;
    }

    _getInputField() {
        let addBox = document.createElement('div');
        addBox.className = 'add-box';
        addBox.innerHTML = `
              <input type="text" class="form-control input-text"/>
              <button type="button" class="btn btn-danger">
                <i class="fas fa-minus"></i>
              </button>`;

        return addBox;
    }
}