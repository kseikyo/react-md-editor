(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{212:function(e,n){!function(e){for(var n=/\((?:[^();"#\\]|\\[\s\S]|;.*|"(?:[^"\\]|\\.)*"|#(?:\{(?:(?!#\})[\s\S])*#\}|[^{])|<expr>)*\)/.source,s=0;s<5;s++)n=n.replace(/<expr>/g,n);n=n.replace(/<expr>/g,/[^\s\S]/.source);var d=e.languages.lilypond={comment:/%(?:(?!\{).*|\{[\s\S]*?%\})/,"embedded-scheme":{pattern:RegExp(/(^|[=\s])#(?:"(?:[^"\\]|\\.)*"|[^\s()"]*(?:[^\s()]|<expr>))/.source.replace(/<expr>/g,n),"m"),lookbehind:!0,greedy:!0,inside:{scheme:{pattern:/^(#)[\s\S]+$/,lookbehind:!0,alias:"language-scheme",inside:{"embedded-lilypond":{pattern:/#\{[\s\S]*?#\}/,greedy:!0,inside:{punctuation:/^#\{|#\}$/,lilypond:{pattern:/[\s\S]+/,alias:"language-lilypond",inside:null}}},rest:e.languages.scheme}},punctuation:/#/}},string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0},"class-name":{pattern:/(\\new\s+)[\w-]+/,lookbehind:!0},keyword:{pattern:/\\[a-z][-\w]*/i,inside:{punctuation:/^\\/}},operator:/[=|]|<<|>>/,punctuation:{pattern:/(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/,lookbehind:!0},number:/\b\d+(?:\/\d+)?\b/};d["embedded-scheme"].inside.scheme.inside["embedded-lilypond"].inside.lilypond.inside=d,e.languages.ly=d}(Prism)}}]);