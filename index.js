var CHANGE_VARIABLES_EXTENSIONS = [
  '.js',
  '.html',
  '.mako',
  '.less',
  '.css'
];

var FORCE_SKIPPED_EXTENSIONS = [
  '.min.js',
];

var MAPPING = {
  'glyphicon-adjust': 'fa-adjust',
  'glyphicon-alert': 'fa-exclamation-triangle',
  'glyphicon-align-center': 'fa-align-center',
  'glyphicon-align-justify': 'fa-align-justify',
  'glyphicon-align-left': 'fa-align-left',
  'glyphicon-align-right': 'fa-align-right',
  'glyphicon-apple': 'fa-apple',
  'glyphicon-arrow-down': 'fa-arrow-down',
  'glyphicon-arrow-left': 'fa-arrow-left',
  'glyphicon-arrow-right': 'fa-arrow-right',
  'glyphicon-arrow-up': 'fa-arrow-up',
  'glyphicon-asterisk': 'fa-asterisk',
  'glyphicon-baby-formula': 'fa-question',
  'glyphicon-backward': 'fa-backward',
  'glyphicon-ban-circle': 'fa-ban',
  'glyphicon-barcode': 'fa-barcode',
  'glyphicon-bed': 'fa-bed',
  'glyphicon-bell': 'fa-bell',
  'glyphicon-bishop': 'fa-question',
  'glyphicon-bitcoin': 'fa-bitcoin',
  'glyphicon-blackboard': 'fa-question',
  'glyphicon-bold': 'fa-bold',
  'glyphicon-book': 'fa-book',
  'glyphicon-bookmark': 'fa-bookmark',
  'glyphicon-briefcase': 'fa-briefcase',
  'glyphicon-btc': 'fa-btc',
  'glyphicon-bullhorn': 'fa-bullhorn',
  'glyphicon-calendar': 'fa-calendar',
  'glyphicon-camera': 'fa-camera',
  'glyphicon-cd': 'fa-dot-circle-o',
  'glyphicon-certificate': 'fa-certificate',
  'glyphicon-check': 'fa-check',
  'glyphicon-chevron-down': 'fa-chevron-down',
  'glyphicon-chevron-left': 'fa-chevron-left',
  'glyphicon-chevron-right': 'fa-chevron-right',
  'glyphicon-chevron-up': 'fa-chevron-up',
  'glyphicon-circle-arrow-down': 'fa-arrow-circle-down',
  'glyphicon-circle-arrow-left': 'fa-arrow-circle-left',
  'glyphicon-circle-arrow-right': 'fa-arrow-circle-right',
  'glyphicon-circle-arrow-up': 'fa-arrow-circle-up',
  'glyphicon-cloud': 'fa-cloud',
  'glyphicon-cloud-download': 'fa-cloud-download',
  'glyphicon-cloud-upload': 'fa-cloud-upload',
  'glyphicon-cog': 'fa-cog',
  'glyphicon-collapse-down': 'fa-caret-square-o-down',
  'glyphicon-collapse-up': 'fa-caret-square-o-up',
  'glyphicon-comment': 'fa-comment',
  'glyphicon-compressed': 'fa-file-archive-o',
  'glyphicon-console': 'fa-terminal',
  'glyphicon-copy': 'fa-copy',
  'glyphicon-copyright-mark': 'fa-copyright',
  'glyphicon-credit-card': 'fa-credit-card',
  'glyphicon-cutlery': 'fa-cutlery',
  'glyphicon-dashboard': 'fa-dashboard',
  'glyphicon-download': 'fa-download',
  'glyphicon-download-alt': 'fa-cloud-download',
  'glyphicon-duplicate': 'fa-files-o',
  'glyphicon-earphone': 'fa-phone',
  'glyphicon-edit': 'fa-edit',
  'glyphicon-education': 'fa-graduation-cap',
  'glyphicon-eject': 'fa-eject',
  'glyphicon-envelope': 'fa-envelope',
  'glyphicon-equalizer': 'fa-bar-chart',
  'glyphicon-erase': 'fa-eraser',
  'glyphicon-eur': 'fa-eur',
  'glyphicon-euro': 'fa-eur',
  'glyphicon-exclamation-sign': 'fa-exclamation-circle',
  'glyphicon-expand': 'fa-caret-square-o-right',
  'glyphicon-export': 'fa-download',
  'glyphicon-eye-close': 'fa-eye-slash',
  'glyphicon-eye-open': 'fa-eye',
  'glyphicon-facetime-video': 'fa-video-camera',
  'glyphicon-fast-backward': 'fa-fast-backward',
  'glyphicon-fast-forward': 'fa-fast-forward',
  'glyphicon-file': 'fa-file',
  'glyphicon-film': 'fa-film',
  'glyphicon-filter': 'fa-filter',
  'glyphicon-fire': 'fa-fire',
  'glyphicon-flag': 'fa-flag',
  'glyphicon-flash': 'fa-flash',
  'glyphicon-floppy-disk': 'fa-save',
  'glyphicon-floppy-open': 'fa-upload',
  'glyphicon-floppy-remove': 'fa-remove',
  'glyphicon-floppy-save': 'fa-download',
  'glyphicon-floppy-saved': 'fa-check',
  'glyphicon-folder-close': 'fa-folder',
  'glyphicon-folder-open': 'fa-folder-open',
  'glyphicon-font': 'fa-font',
  'glyphicon-forward': 'fa-forward',
  'glyphicon-fullscreen': 'fa-expand',
  'glyphicon-gbp': 'fa-gbp',
  'glyphicon-gift': 'fa-gift',
  'glyphicon-glass': 'fa-glass',
  'glyphicon-globe': 'fa-globe',
  'glyphicon-grain': 'fa-question',
  'glyphicon-hand-down': 'fa-hand-o-down',
  'glyphicon-hand-left': 'fa-hand-o-left',
  'glyphicon-hand-right': 'fa-hand-o-right',
  'glyphicon-hand-up': 'fa-hand-o-up',
  'glyphicon-hd-video': 'fa-film',
  'glyphicon-hdd': 'fa-hdd-o',
  'glyphicon-header': 'fa-header',
  'glyphicon-headphones': 'fa-headphones',
  'glyphicon-heart': 'fa-heart',
  'glyphicon-heart-empty': 'fa-heart-o',
  'glyphicon-home': 'fa-home',
  'glyphicon-hourglass': 'fa-hourglass',
  'glyphicon-ice-lolly': 'fa-question',
  'glyphicon-ice-lolly-tasted': 'fa-question',
  'glyphicon-import': 'fa-upload',
  'glyphicon-inbox': 'fa-inbox',
  'glyphicon-indent-left': 'fa-indent',
  'glyphicon-indent-right': 'fa-outdent',
  'glyphicon-info-sign': 'fa-info-circle',
  'glyphicon-italic': 'fa-italic',
  'glyphicon-jpy': 'fa-jpy',
  'glyphicon-king': 'fa-question',
  'glyphicon-knight': 'fa-question',
  'glyphicon-lamp': 'fa-lightbulb-o',
  'glyphicon-leaf': 'fa-leaf',
  'glyphicon-level-up': 'fa-level-up',
  'glyphicon-link': 'fa-link',
  'glyphicon-list': 'fa-list',
  'glyphicon-list-alt': 'fa-list-alt',
  'glyphicon-lock': 'fa-lock',
  'glyphicon-log-in': 'fa-sign-in',
  'glyphicon-log-out': 'fa-sign-out',
  'glyphicon-magnet': 'fa-magnet',
  'glyphicon-map-marker': 'fa-map-marker',
  'glyphicon-menu-down': 'fa-chevron-down',
  'glyphicon-menu-hamburger': 'fa-bars',
  'glyphicon-menu-left': 'fa-chevron-left',
  'glyphicon-menu-right': 'fa-chevron-right',
  'glyphicon-menu-up': 'fa-chevron-up',
  'glyphicon-minus': 'fa-minus',
  'glyphicon-minus-sign': 'fa-minus-circle',
  'glyphicon-modal-window': 'fa-question',
  'glyphicon-move': 'fa-arrows',
  'glyphicon-music': 'fa-music',
  'glyphicon-new-window': 'fa-external-link',
  'glyphicon-object-align-bottom': 'fa-question',
  'glyphicon-object-align-horizontal': 'fa-question',
  'glyphicon-object-align-left': 'fa-question',
  'glyphicon-object-align-right': 'fa-question',
  'glyphicon-object-align-top': 'fa-question',
  'glyphicon-object-align-vertical': 'fa-question',
  'glyphicon-off': 'fa-power-off',
  'glyphicon-oil': 'fa-question',
  'glyphicon-ok': 'fa-check',
  'glyphicon-ok-circle': 'fa-check-circle',
  'glyphicon-ok-sign': 'fa-check-circle',
  'glyphicon-open': 'fa-upload',
  'glyphicon-open-file': 'fa-folder-open-o',
  'glyphicon-option-horizontal': 'fa-ellipsis-h',
  'glyphicon-option-vertical': 'fa-ellipsis-v',
  'glyphicon-paperclip': 'fa-paperclip',
  'glyphicon-paste': 'fa-paste',
  'glyphicon-pause': 'fa-pause',
  'glyphicon-pawn': 'fa-question',
  'glyphicon-pencil': 'fa-pencil',
  'glyphicon-phone': 'fa-phone',
  'glyphicon-phone-alt': 'fa-phone-square',
  'glyphicon-picture': 'fa-picture-o',
  'glyphicon-piggy-bank': 'fa-money',
  'glyphicon-plane': 'fa-plane',
  'glyphicon-play': 'fa-play',
  'glyphicon-play-circle': 'fa-play-circle',
  'glyphicon-plus': 'fa-plus',
  'glyphicon-plus-sign': 'fa-plus-circle',
  'glyphicon-print': 'fa-print',
  'glyphicon-pushpin': 'fa-thumb-tack',
  'glyphicon-qrcode': 'fa-qrcode',
  'glyphicon-queen': 'fa-question',
  'glyphicon-question-sign': 'fa-question-circle',
  'glyphicon-random': 'fa-random',
  'glyphicon-record': 'fa-dot-circle-o',
  'glyphicon-refresh': 'fa-refresh',
  'glyphicon-registration-mark': 'fa-registered',
  'glyphicon-remove': 'fa-remove',
  'glyphicon-remove-circle': 'fa-times-circle',
  'glyphicon-remove-sign': 'fa-times-circle',
  'glyphicon-repeat': 'fa-repeat',
  'glyphicon-resize-full': 'fa-expand',
  'glyphicon-resize-horizontal': 'fa-arrows-h',
  'glyphicon-resize-small': 'fa-compress',
  'glyphicon-resize-vertical': 'fa-arrows-v',
  'glyphicon-retweet': 'fa-retweet',
  'glyphicon-road': 'fa-road',
  'glyphicon-rub': 'fa-rub',
  'glyphicon-ruble': 'fa-ruble',
  'glyphicon-save': 'fa-save',
  'glyphicon-save-file': 'fa-save',
  'glyphicon-saved': 'fa-check',
  'glyphicon-scale': 'fa-balance-scale',
  'glyphicon-scissors': 'fa-scissors',
  'glyphicon-screenshot': 'fa-crosshairs',
  'glyphicon-sd-video': 'fa-film',
  'glyphicon-search': 'fa-search',
  'glyphicon-send': 'fa-paper-plane-o',
  'glyphicon-share': 'fa-share',
  'glyphicon-share-alt': 'fa-share-alt',
  'glyphicon-shopping-cart': 'fa-shopping-cart',
  'glyphicon-signal': 'fa-signal',
  'glyphicon-sort': 'fa-sort',
  'glyphicon-sort-by-alphabet': 'fa-sort-alpha-asc',
  'glyphicon-sort-by-alphabet-alt': 'fa-sort-alpha-desc',
  'glyphicon-sort-by-attributes': 'fa-sort-amount-asc',
  'glyphicon-sort-by-attributes-alt': 'fa-sort-amount-desc',
  'glyphicon-sort-by-order': 'fa-sort-numeric-asc',
  'glyphicon-sort-by-order-alt': 'fa-sort-numeric-desc',
  'glyphicon-sound-5-1': 'fa-music',
  'glyphicon-sound-6-1': 'fa-music',
  'glyphicon-sound-7-1': 'fa-music',
  'glyphicon-sound-dolby': 'fa-music',
  'glyphicon-sound-stereo': 'fa-music',
  'glyphicon-star': 'fa-star',
  'glyphicon-star-empty': 'fa-star-o',
  'glyphicon-stats': 'fa-bar-chart',
  'glyphicon-step-backward': 'fa-step-backward',
  'glyphicon-step-forward': 'fa-step-forward',
  'glyphicon-stop': 'fa-stop',
  'glyphicon-subscript': 'fa-subscript',
  'glyphicon-subtitles': 'fa-cc',
  'glyphicon-sunglasses': 'fa-question',
  'glyphicon-superscript': 'fa-superscript',
  'glyphicon-tag': 'fa-tag',
  'glyphicon-tags': 'fa-tags',
  'glyphicon-tasks': 'fa-tasks',
  'glyphicon-tent': 'fa-question',
  'glyphicon-text-background': 'fa-font',
  'glyphicon-text-color': 'fa-font',
  'glyphicon-text-height': 'fa-text-height',
  'glyphicon-text-size': 'fa-font',
  'glyphicon-text-width': 'fa-text-width',
  'glyphicon-th': 'fa-th',
  'glyphicon-th-large': 'fa-th-large',
  'glyphicon-th-list': 'fa-th-list',
  'glyphicon-thumbs-down': 'fa-thumbs-down',
  'glyphicon-thumbs-up': 'fa-thumbs-up',
  'glyphicon-time': 'fa-clock-o',
  'glyphicon-tint': 'fa-tint',
  'glyphicon-tower': 'fa-building',
  'glyphicon-transfer': 'fa-exchange',
  'glyphicon-trash': 'fa-trash',
  'glyphicon-tree-conifer': 'fa-tree',
  'glyphicon-tree-deciduous': 'fa-tree',
  'glyphicon-triangle-bottom': 'fa-caret-down',
  'glyphicon-triangle-left': 'fa-caret-left',
  'glyphicon-triangle-right': 'fa-caret-right',
  'glyphicon-triangle-top': 'fa-caret-up',
  'glyphicon-unchecked': 'fa-square-o',
  'glyphicon-upload': 'fa-upload',
  'glyphicon-usd': 'fa-usd',
  'glyphicon-user': 'fa-user',
  'glyphicon-volume-down': 'fa-volume-down',
  'glyphicon-volume-off': 'fa-volume-off',
  'glyphicon-volume-up': 'fa-volume-up',
  'glyphicon-warning-sign': 'fa-exclamation-triangle',
  'glyphicon-wrench': 'fa-wrench',
  'glyphicon-xbt': 'fa-btc',
  'glyphicon-yen': 'fa-yen',
  'glyphicon-zoom-in': 'fa-search-plus',
  'glyphicon-zoom-out': 'fa-search-minus'
}


var consoleColors = require('colors'),
  fs = require('fs'),
  path = require('path');

console.log('Welcome to fonteroni!'.rainbow);

try {
  fs.unlinkSync('result.html');
}
catch (e) {
}

var args = process.argv.slice(2);
if (args.length == 0) {
  console.log('Usage: node index.js PATH_TO_YOUR_FOLDER [--preview]')
  console.log('or')
  console.log('node index.js ICON_NAME_YOU_WANT_TO_CONVERT')
}
else {
  console.log('Starting...');
  console.log(('Loaded ' + Object.keys(MAPPING).length + ' icon mappings').green);

  if (args[0].toLowerCase().indexOf('glyphicon') == 0) {
    if (MAPPING[args[0].toLowerCase()]) {
      console.log('\t', args[0].red, '=>', MAPPING[args[0].toLowerCase()].green);
    }
    else {
      console.log('\t', 'Icon', args[0].red, 'NOT FOUND');
    }
  }

  else {
    var finder = require('findit')(args[0]);

    finder.on('directory', function (dir, stat, stop) {
      var base = path.basename(dir);
      if (base === '.git' || base === 'node_modules') stop()
    });

    finder.on('file', function (file) {
      var baseName = path.basename(file);
      var readIt = false;
      CHANGE_VARIABLES_EXTENSIONS.forEach(function (ext) {
        if (baseName.toLowerCase().indexOf(ext) > -1) {
          readIt = true;
        }
      });
      FORCE_SKIPPED_EXTENSIONS.forEach(function (ext) {
        if (baseName.toLowerCase().indexOf(ext) > -1) {
          readIt = false;
        }
      });
      if (readIt) {
        fs.readFile(file, 'utf8', function (err, data) {
          if (err) {
            return console.log(err);
          }

          var matches;
          var re = /((?:\w+-)+\w+)/gi;
          console.log(file);
          while (matches = re.exec(data)) {
            if (matches.index === re.lastIndex) {
              re.lastIndex++;
            }
            if (matches[0].indexOf('glyphicon-') > -1) {
              if (MAPPING[matches[0].toLowerCase()]) {
                console.log('\t', matches[0].red, '=>', MAPPING[matches[0].toLowerCase()].green);
              }
              else {
                console.log('\t', 'Icon', matches[0].red, 'NOT FOUND');
              }
              console.log('--')
            }
          }
          if (args[1] == null || args[1] !== '--preview') {
            var result = data.replace(re, function ($1) {
              return MAPPING[$1.toLowerCase()] ? MAPPING[$1.toLowerCase()] : $1;
            }).replace(/glyphicon/gi, 'fa');
            fs.writeFile(file, result, 'utf8', function (err) {
              if (err) {
                return console.log(err);
              }
            });
          }
        });
      }
    });
  }
}
