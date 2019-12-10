export class FormGenerator {
    generateInputField(inputType) {
        return this._getInputField(inputType);
    }

    generateDefaultInputGroup(inputType) {
        return this._getDefaultBox(inputType);
    }

    generateErrorMessage(message) {
        return this._getErrorMessage(message);
    }

    _getErrorMessage(message) {
        return `<i class="fas fa-exclamation"></i> ${message} <i class="fas fa-exclamation"></i>`;
    }

    _getDefaultBox(inputType) {
        return `
            <div class="add-box">
              <input type="text" class="form-control input-text-first ${inputType}"/>
            </div>`;
    }

    _getInputField(inputType) {
        let addBox = document.createElement('div');
        addBox.className = 'add-box';
        addBox.innerHTML = `
              <input type="text" class="form-control input-text ${inputType}"/>
              <button type="button" class="btn btn-danger">
                <i class="fas fa-minus"></i>
              </button>`;

        return addBox;
    }
}