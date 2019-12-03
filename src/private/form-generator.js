export class FormGenerator {
    generateButton(type) {
        return this._getAddButton(type);
    }

    // todo: must return array of label
    generateVariantLabels() {
        return this._getVariantLabels();
    }

    _getAddButton(type) {
        return `<button type="button" class="btn btn-primary btn-lg btn-block add-${type}-btn"><i class="fas fa-plus"></i></button>`
    }

    _getVariantLabels() {
        return `<label for="variant">Variants</label>
           <input type="text" id="variant" class="form-control"/>`;
    }
}