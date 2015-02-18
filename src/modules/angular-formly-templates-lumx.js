(function () {'use strict'; var USING_TEMPLATES = true; var MODULE_NAME = "formlyLumx"; var PREFIX = "lx";var FIELDS = [{ "name": "checkbox", "template": "<div class=\"checkbox\"><input ng-model=\"model[options.key]\" type=\"checkbox\" ng-checked=\"{{::options.templateOptions.checked}}\" class=\"checkbox__input\"><label for=\"{{::id}}\" class=\"checkbox__label\">{{::options.templateOptions.label}}</label><span ng-if=\"::options.templateOptions.description\" class=\"checkbox__help\">{{::options.templateOptions.description}}</span></div>"}, {"name": 
"date-picker", "template": "<div><lx-date-picker model=\"model[options.key]\" label=\"{{::options.templateOptions.label}} {{::options.templateOptions.required ? \'*\' : \'\'}}\"></lx-date-picker></div>"}, {"name": 
"flex", "template": "<div><formly-form fields=\"options.templateOptions.fields\" model=\"$parent.model\" form=\"::id\" root-el=\"div\" flex-container=\"{{::options.templateOptions.flex.container}}\" flex-align=\"{{::options.templateOptions.flex.align}}\" flex-gutter=\"{{::options.templateOptions.flex.gutter}}\"></formly-form></div>"}, {"name": 
"input", "template": "<div><lx-text-field model=\"::model[options.key]\" fixed-label=\"::options.templateOptions.fixedLabel\" theme=\"{{::options.templateOptions.theme}}\" label=\"{{::options.templateOptions.label}} {{::options.templateOptions.required ? \'*\' : \'\'}}\" valid=\"options.formControl.$valid && options.formControl.$touched\" error=\"options.formControl.$invalid && options.formControl.$touched\"><input ng-model=\"model[options.key]\" type=\"{{::options.templateOptions.type}}\"></lx-text-field></div>"}, {"name": 
"radio", "template": "<div><div class=\"radio-group\"><h3><label>{{::options.templateOptions.label}}</label></h3><div class=\"radio-button\" ng-repeat=\"option in options.templateOptions.options\"><input ng-model=\"$parent.model[$parent.options.key]\" id=\"{{::id + \'_\' + $index}}\" type=\"radio\" ng-disabled=\"::option.disabled\" class=\"radio-button__input\" ng-value=\"::option.value\" aria-labelledby=\"{{::id + \'_\' + $index + \'_radioButton\'}}\"><label for=\"{{::id + \'_\' + $index}}\" class=\"radio-button__label\">{{::option.name}}</label><span ng-if=\"::option.description\" class=\"radio-button__help\">{{::option.description}}</span></div></div></div>"}, {"name": 
"select", "template": "<span ng-if=\"::options.templateOptions.space\"><br></span><div ng-style=\"::options.templateOptions.style\"><h3 ng-if=\"::options.templateOptions.label\"><label>{{::options.templateOptions.label}} {{::options.templateOptions.required ? \'*\' : \'\'}}</label></h3><lx-select ng-model=\"model[options.key]\" choices=\"options.templateOptions.options\" placeholder=\"{{::options.templateOptions.placeholder}}\" min-length=\"::options.templateOptions.minLength\" allow-clear=\"::options.templateOptions.allowClear\" ng-attr-multiple=\"{{::options.templateOptions.multiple}}\"><lx-select-selected>{{$selected[options.templateOptions.selected]}} {{::options.templateOptions.selected2 ? \' - \' + $selected[options.templateOptions.selected2] : \'\'}}</lx-select-selected><lx-select-choices>{{$choice[options.templateOptions.choice]}} {{::options.templateOptions.choice2 ? \' - \' + $choice[options.templateOptions.choice2] : \'\'}}</lx-select-choices></lx-select></div>"}, {"name": 
"switch", "template": "<div class=\"switch\"><input ng-model=\"model[options.key]\" type=\"checkbox\" ng-checked=\"{{::options.templateOptions.checked}}\" class=\"switch__input\"><label for=\"{{::id}}\" class=\"switch__label\">{{::options.templateOptions.label}}</label><span ng-if=\"::options.templateOptions.description\" class=\"switch__help\">{{::options.templateOptions.description}}</span></div>"}, {"name": 
"textarea", "template": "<div><lx-text-field model=\"::model[options.key]\" fixed-label=\"::options.templateOptions.fixedLabel\" icon=\"{{::options.templateOptions.icon}}\" theme=\"{{::options.templateOptions.theme}}\" label=\"{{::options.templateOptions.label}} {{::options.templateOptions.required ? \'*\' : \'\'}}\" valid=\"options.formControl.$valid && options.formControl.$touched\" error=\"options.formControl.$invalid && options.formControl.$touched || options.validators\"><textarea ng-model=\"model[options.key]\">\n    </textarea></lx-text-field></div>"}, {"name": 
"title", "template": "<span ng-if=\"::options.templateOptions.space || true\"><br></span><div><span ng-class=\"::options.templateOptions.className || \'fs-title\'\" ng-style=\"::options.templateOptions.style\" aria-describedby=\"{{::id}}\">{{::options.templateOptions.title}}</span><formly-transclude></formly-transclude></div>"}]; var WRAPPERS = [{ "name": "wrapper-div", "template": "<div ng-class=\"::options.templateOptions.div.className\" ng-style=\"::options.templateOptions.div.style\"><formly-transclude></formly-transclude></div>"}, {"name": 
"wrapper-errors", "template": "<div><formly-transclude></formly-transclude><ul class=\"form-error\" ng-messages=\"options.formControl.$error\" ng-show=\"options.formControl.$invalid && options.formControl.$touched\"><li ng-repeat=\"error in ::options.validation.messages\" ng-message=\"{{::error.name}}\">{{::error.message}}</li></ul><span class=\"display-block\" ng-if=\"options.templateOptions.pending && options.formControl.$touched && options.formControl.$pending\">{{::options.templateOptions.pending || \'Checking...\'}}</span></div>"}, {"name": 
"wrapper-flex-item", "template": "<div ng-class=\"\'{{::options.templateOptions.flex.className}}\'\" flex-item=\"{{::options.templateOptions.flex.item}}\" flex-order=\"{{::options.templateOptions.flex.order}}\"><formly-transclude></formly-transclude></div>"}];function _prefixer(name) { return PREFIX + '-' + name; } function _wrapperTemplateUrl(name) { return 'wrappers/formly-wrappers-' + _prefixer(name) + '.html'; } function _fieldTemplateUrl(name) { return 'fields/formly-fields-' + _prefixer(name) + '.html'; } angular.module(MODULE_NAME, ['formly']).config(setCustomTemplates).run(cacheLumXTemplates); 	/*@ngInject*/ 	function cacheLumXTemplates($templateCache) { 		if (USING_TEMPLATES) { 			angular.forEach(FIELDS, function (field) { 				$templateCache.put(_fieldTemplateUrl(field.name), field.template); 			}); 			angular.forEach(WRAPPERS, function (wrapper) { 				$templateCache.put(_wrapperTemplateUrl(wrapper.name), wrapper.template); 			});}} 	/*@ngInject*/ 	function setCustomTemplates(formlyConfigProvider) { 		if (USING_TEMPLATES) { 			var wrapperList = []; 			angular.forEach(WRAPPERS, function (wrapper) { 				wrapperList.push(_prefixer(wrapper.name)); 			}); 			angular.forEach(WRAPPERS, function (wrapper) { 				formlyConfigProvider.setWrapper({name: _prefixer(wrapper.name), templateUrl: _wrapperTemplateUrl(wrapper.name)});}); 			/* set types */ 			angular.forEach(FIELDS, function (field) { 				/* without defaults */ 				if (field.name === 'title' || field.name === 'flex') { 					formlyConfigProvider.setType({ 						name: _prefixer(field.name), 						templateUrl: _fieldTemplateUrl(field.name), 						wrappers: wrapperList 					}); 				} else { 					/* with defaults */ 					formlyConfigProvider.setType({ 						name: _prefixer(field.name), 						templateUrl: _fieldTemplateUrl(field.name), 						wrappers: wrapperList, 						defaultOptions: { 							ngModelAttrs: { 								required: { 									bound: 'ng-required', 									attributes: 'required' 								}, 								disabled: { 									bound: 'ng-disabled', 									attributes: 'disabled' 								}}}});}});}}}());