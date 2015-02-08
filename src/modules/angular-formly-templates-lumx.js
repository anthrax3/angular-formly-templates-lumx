(function () {
	'use strict';
	var USING_TEMPLATES = true;
	var MODULE_NAME = 'formlyLumx';
	var PREFIX = 'lx';
	var FIELDS = [{
		"name": "checkbox",
		"template": "<div class=\"checkbox\" ng-class=\"{mt: options.templateOptions.help}\"><input class=\"checkbox__input\" type=\"checkbox\" id=\"{{::id}}\" name=\"{{::id}}\" formly-custom-validation=\"options.validators\" aria-describedby=\"{{::id}}_checkbox\" ng-disabled=\"options.templateOptions.disabled\" ng-model=\"model[options.key]\"><label for=\"{{::id}}\" class=\"checkbox__label\">{{::options.templateOptions.label}}</label><span class=\"checkbox__help\">{{::options.templateOptions.help}}</span></div>"
	}, {
		"name": "date-picker",
		"template": "<div><lx-date-picker model=\"model[options.key]\" label=\"{{::options.templateOptions.label}} {{::options.templateOptions.required ? \'*\' : \'\'}}\" ng-required=\"options.templateOptions.required\" aria-labelledby=\"{{::id}}\"></lx-date-picker></div>"
	}, {
		"name": "flex",
		"template": "<div ng-class=\"::options.templateOptions.flex.className\" style=\"::options.templateOptions.flexContainer.style\" flex-container=\"{{::options.templateOptions.flex.container}}\" flex-align=\"{{::options.templateOptions.flex.align}}\" flex-gutter=\"{{::options.templateOptions.flex.gutter}}\"><formly-form fields=\"options.templateOptions.fields\" model=\"::$parent.model\"></formly-form></div>"
	}, {
		"name": "radio",
		"template": "<div><br><div class=\"radio-group\" name=\"{{::id}}\"><h3><label>{{::options.templateOptions.label}}</label></h3><div class=\"radio-button\" ng-repeat=\"(key, option) in options.templateOptions.options\"><input type=\"radio\" formly-custom-validation=\"options.validators\" ng-model=\"$parent.model[$parent.options.key]\" ng-disabled=\"::option.disabled\" class=\"radio-button__input\" ng-value=\"::option.value\" aria-describedby=\"{{::id}} + \'_\' + {{::$index}} + \'_radioButton\'\" id=\"{{::id + \'_\'+ $index}}\"><label for=\"{{::id + \'_\'+ $index}}\" class=\"radio-button__label\">{{::option.name}}</label><span ng-if=\"::option.help\" class=\"radio-button__help\">{{::option.help}}</span></div></div></div>"
	}, {
		"name": "select-multiple",
		"template": "<div><br><h3><label>{{::options.templateOptions.label || \'Select\'}} {{::options.templateOptions.required ? \'*\' : \'\'}}</label></h3><lx-select ng-model=\"model[options.key]\" aria-labelledby=\"{{::id}}\" choices=\"options.templateOptions.options\" placeholder=\"{{::options.templateOptions.placeholder}}\" min-length=\"::options.templateOptions.minLength\" allow-clear=\"::options.templateOptions.allowClear\" multiple=\"multiple\"><lx-select-selected>{{$selected[options.templateOptions.selected]}} {{::options.templateOptions.selected2 ? \' - \' + $selected[options.templateOptions.selected2] : \'\'}}</lx-select-selected><lx-select-choices>{{$choice[options.templateOptions.choice]}} {{::options.templateOptions.choice2 ? \' - \' + $choice[options.templateOptions.choice2] : \'\'}}</lx-select-choices></lx-select></div>"
	}, {
		"name": "select",
		"template": "<div><br><h3><label>{{::options.templateOptions.label || \'Select\'}} {{::options.templateOptions.required ? \'*\' : \'\'}}</label></h3><lx-select ng-model=\"model[options.key]\" aria-labelledby=\"{{::id}}\" choices=\"options.templateOptions.options\" placeholder=\"{{::options.templateOptions.placeholder}}\" min-length=\"::options.templateOptions.minLength\" allow-clear=\"::options.templateOptions.allowClear\"><lx-select-selected>{{$selected[options.templateOptions.selected]}} {{::options.templateOptions.selected2 ? \' - \' + $selected[options.templateOptions.selected2] : \'\'}}</lx-select-selected><lx-select-choices>{{$choice[options.templateOptions.choice]}} {{::options.templateOptions.choice2 ? \' - \' + $choice[options.templateOptions.choice2] : \'\'}}</lx-select-choices></lx-select></div>"
	}, {
		"name": "switch",
		"template": "<div class=\"switch\" ng-class=\"{mt: options.templateOptions.help}\"><input type=\"checkbox\" id=\"{{::id}}\" class=\"switch__input\" ng-model=\"model[options.key]\" ng-disabled=\"options.templateOptions.disabled\" name=\"{{::id}}\" aria-describedby=\"{{::id}}_switch\"><label for=\"{{::id}}\" class=\"switch__label\">{{::options.templateOptions.label}}</label><span class=\"switch__help\">{{::options.templateOptions.help}}</span></div>"
	}, {
		"name": "text",
		"template": "<div><lx-text-field model=\"::model[options.key || index]\" id=\"{{::id}}\" fixed-label=\"::options.templateOptions.fixedLabel\" icon=\"{{::options.templateOptions.icon}}\" theme=\"{{::options.templateOptions.theme}}\" label=\"{{::options.templateOptions.label}} {{::options.templateOptions.required ? \'*\' : \'\'}}\" disabled=\"::options.templateOptions.disabled\" valid=\"options.formControl.$valid && options.formControl.$touched\" error=\"options.formControl.$invalid && options.formControl.$touched || options.validators\" aria-labelledby=\"{{::id}}\"><input ng-model=\"model[options.key]\" type=\"{{::options.templateOptions.type}}\" ng-required=\"::options.templateOptions.required\" ng-disabled=\"::options.templateOptions.disabled\" ng-model-options=\"::options.modelOptions || {}\"></lx-text-field></div>"
	}, {
		"name": "textarea",
		"template": "<div><lx-text-field id=\"{{::id}}\" icon=\"{{::options.templateOptions.icon}}\" theme=\"{{::options.templateOptions.theme}}\" label=\"{{::options.templateOptions.label}} {{::options.templateOptions.required ? \'*\' : \'\'}}\" fixed-label=\"::options.templateOptions.fixedLabel\" model=\"::model[options.key]\" disabled=\"::options.templateOptions.disabled\" valid=\"options.formControl.$valid && options.formControl.$touched\" error=\"options.formControl.$invalid && options.formControl.$touched || options.validators\" aria-labelledby=\"{{::id}}\"><textarea ng-model=\"model[options.key]\" ng-required=\"::options.templateOptions.required\" ng-disabled=\"::options.templateOptions.disabled\" ng-model-options=\"::options.modelOptions || {}\">\n    </textarea></lx-text-field></div>"
	}];
	var WRAPPERS = [{
		"name": "above",
		"template": "<span ng-if=\"::options.templateOptions.above.space\"><br></span><div><span ng-if=\"::options.templateOptions.above.text\" ng-class=\"::options.templateOptions.above.className || \'fs-headline\'\" ng-style=\"::options.templateOptions.above.style\" aria-describedby=\"{{::id}}_wrapper_above\">{{::options.templateOptions.above.text}}</span><formly-transclude></formly-transclude></div>"
	}, {
		"name": "below",
		"template": "<div><formly-transclude></formly-transclude><span ng-if=\"::options.templateOptions.below.text\" ng-class=\"::options.templateOptions.below.className || \'p+\'\" ng-style=\"::options.templateOptions.below.style\" aria-describedby=\"{{::id}}_wrapper_below\">{{::options.templateOptions.below.text}}</span></div><span ng-if=\"::options.templateOptions.below.space\"><br></span>"
	}, {
		"name": "div",
		"template": "<div ng-class=\"::options.templateOptions.div.className\" ng-style=\"::options.templateOptions.div.style\"><formly-transclude></formly-transclude></div>"
	}, {
		"name": "errors-custom",
		"template": "<div><formly-transclude></formly-transclude><ul class=\"form-error\" ng-messages=\"options.formControl.$error\" ng-show=\"options.formControl.$invalid && options.formControl.$touched|| options.validators\"><li ng-message=\"::options.formControl.msg.custom.name\">{{::options.formControl.msg.custom.text || \'Error\'}}</li></ul></div>"
	}, {
		"name": "errors-number",
		"template": "<div><formly-transclude></formly-transclude><ul class=\"form-error\" ng-messages=\"options.formControl.$error\" ng-show=\"options.formControl.$invalid && options.formControl.$touched|| options.validators\"><li ng-message=\"required\">{{::options.templateOptions.msg.required || \"Aren\'t you forgetting something?\"}}</li><li ng-message=\"number\">{{::options.templateOptions.msg.number || \"Not a valid number.\"}}</li><li ng-message=\"min\">Too low. {{::options.min}} or higher.</li><li ng-message=\"max\">Too high. {{::options.max}} or lower.</li></ul></div>"
	}, {
		"name": "errors-required",
		"template": "<div><formly-transclude></formly-transclude><ul class=\"form-error\" ng-messages=\"options.formControl.$error\" ng-show=\"options.formControl.$invalid && options.formControl.$touched\"><li ng-message=\"required\">{{::options.templateOptions.msg.required || \"Aren\'t you forgetting something?\"}}</li></ul></div>"
	}, {
		"name": "errors-text",
		"template": "<div><formly-transclude></formly-transclude><ul class=\"form-error\" ng-messages=\"options.formControl.$error\" ng-show=\"options.formControl.$invalid && options.formControl.$touched|| options.validators\"><li ng-message=\"required\">{{::options.templateOptions.msg.required || \"Aren\'t you forgetting something?\"}}</li><li ng-message=\"email\">{{::options.templateOptions.msg.email || \"Not a valid email.\"}}</li><li ng-message=\"minlength\">Too short. {{::options.minlength}} or more characters.</li><li ng-message=\"maxlength\">Too long. {{::options.maxlength}} or less characters.</li><li ng-message=\"pattern\">{{::options.templateOptions.msg.pattern || \"That doesn\'t look right.\"}}</li></ul></div>"
	}, {
		"name": "flex-item",
		"template": "<div ng-class=\"::options.templateOptions.flex.className\" flex-item=\"{{::options.templateOptions.flex.item}}\" flex-order=\"{{::options.templateOptions.flex.order}}\"><formly-transclude></formly-transclude></div>"
	}];

	function _wrapperTemplateUrl (name) {
		return 'wrappers/formly-wrappers-' + PREFIX + '-' + name + '.html';
	}
	function _fieldTemplateUrl (name) {
		return 'fields/formly-fields-' + PREFIX + '-' + name + '.html';
	}

	angular.module('formlyLumx', [])
		.config(setCustomTemplates)
		.run(cacheLumXTemplates);

	/*@ngInject*/
	function cacheLumXTemplates($templateCache) {

		if (USING_TEMPLATES) {
			angular.forEach(FIELDS, function (field) {
				$templateCache.put(_fieldTemplateUrl(field.name), field.template);
			});
			angular.forEach(WRAPPERS, function (wrapper) {
				$templateCache.put(_wrapperTemplateUrl(wrapper.name), wrapper.template);
			});
		}

	}

	/*@ngInject*/
	function setCustomTemplates(formlyConfigProvider) {
		if (USING_TEMPLATES) {

			var wrapperList = [];
			angular.forEach(WRAPPERS, function (wrapper) {
				wrapperList.push(PREFIX + '-wrapper-' + wrapper.name);
			});
			angular.forEach(WRAPPERS, function (wrapper) {
				formlyConfigProvider.setWrapper({
					name: PREFIX + '-wrapper-' + wrapper.name,
					templateUrl: _wrapperTemplateUrl(wrapper.name)
				});
			});

			angular.forEach(FIELDS, function (field) {
				formlyConfigProvider.setType({
					name: PREFIX + '-' + field.name,
					templateUrl: _fieldTemplateUrl(field.name),
					//wrapper: wrapperList
				});
			});
		}
	}
}());
