const { _INFO, emoji } = require('./config/utils/chalkTip');

console.log(
  _INFO(`读取：${__filename.slice(__dirname.length + 1)}`),
  emoji.get('white_check_mark')
);

module.exports = {
  settings: {
    // 'import/resolver': {
    //   node: {
    //     extensions: ['.js', '.jsx', '.ts', '.tsx'],
    //   },
    // },
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx'],
    // },
  },
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base', // airbnb的eslint规范，indent：2，即一个缩进两个空格，qutoes：single，即单引号，max-len：一行100
    'prettier', // ℹ️ Note: You might find guides on the Internet saying you should also extend stuff like "prettier/react". Since version 8.0.0 of eslint-config-prettier, all you need to extend is "prettier"! That includes all plugins.
  ],
  parserOptions: {},
  plugins: [],
  /**
   * overrides可共享配置中的配置不再覆盖.eslintrc文件中的用户设置
   * 在 ESLint v6.0.0 中，父配置始终优先于扩展配置，即使是overrides块。
   * 即ESLint v6.0.0 以前,overrides是会覆盖父配置的，6.0后，不会覆盖父配置
   * https://eslint.org/docs/user-guide/migrating-to-6.0.0#overrides-in-a-config-file-can-now-match-dotfiles
   * https://github.com/eslint/rfcs/pull/13
   */
  overrides: [
    {
      files: ['*.ts', '*tsx'],
      // parser: '@typescript-eslint/parser',
      extends: [
        'airbnb-base',
        'plugin:react/recommended',
        'prettier',
        // 'plugin:import/errors',
        // 'plugin:import/warnings',
        'plugin:import/typescript', // 解析通过相对路径引入的tsx
      ],
      parserOptions: {},
      plugins: [],
      rules: {
        'import/prefer-default-export': 0, // 当模块只有一个导出时，更喜欢使用默认导出而不是命名导出。
        'import/extensions': 0, // 确保在导入路径中一致使用文件扩展名
        'react/react-in-jsx-scope': 0,
        'no-console': 0,
        'import/no-unresolved': 0, // 不能解析带别名的路径的模块，但实际上是不影响代码运行的。找不到解决办法，只能关掉了。
      },
    },
  ],
  // rules优先级最高，会覆盖上面的
  rules: {
    /**
     * 0 => off
     * 1 => warn
     * 2 => error
     */
    // 'class-methods-use-this': 0, // 类方法如果不使用this的话会报错
    // 'react/prop-types': 0,
    // 'no-restricted-syntax': [
    //   // airbnb默认禁用了一些语法
    //   1,
    //   // 'FunctionExpression',
    //   // 'ForInStatement',
    //   { selector: 'ForInStatement', message: '不建议使用for in' },
    // ],
    // 'guard-for-in': 0, // 当for in循环不使用if语句过滤其结果时，它会发出警告
    // 'no-nested-ternary': 0, // 禁止嵌套三元
    // 'no-plusplus': 0,
    // 'arrow-body-style': [1, 'as-needed'], // 在可以省略的地方强制不使用大括号（默认）
    // 'global-require': 1, // 此规则要求所有调用require()都在模块的顶层，类似于 ES6import和export语句，也只能在顶层发生。
    'no-shadow': 0, // https://eslint.org/docs/rules/no-shadow
    // 'import/prefer-default-export': 0, // 当模块只有一个导出时，更喜欢使用默认导出而不是命名导出。
    // 'no-undef': 0, // https://github.com/typescript-eslint/typescript-eslint/issues/2528#issuecomment-689369395
    // 'no-param-reassign': 0,
    // 'func-names': 0, // 不能是匿名函数
    'import/no-extraneous-dependencies': 0, // 开发/生产依赖混乱
    // 'spaced-comment': 2, // 此规则将在注释//或开始后强制执行间距的一致性/*
    // 'no-underscore-dangle': 0, // Unexpected dangling '_' in '_xxx'
    // 'import/extensions': 0, // 省略导入源路径中的文件扩展名
    // 'import/no-unresolved': 0, // 确保导入的模块可以解析为本地文件系统上的模块，如标准节点require.resolve行为所定义的。
    // 'vars-on-top': 0, // 要求var声明位于其作用域的顶部
    // 'prefer-rest-params': 0, // 此规则旨在标记arguments变量的使用
    // 'import/newline-after-import': 1, // 强制在最后一个顶级导入语句或 require 调用之后有一个或多个空行
    // 'prefer-const': 1, // xxx is never reassigned. Use 'const' instead，此规则旨在标记使用let关键字声明的变量
    // 'no-unused-vars': 1, // xxx is assigned a value but never used，此规则旨在消除未使用的变量、函数和函数参数
    // 'no-var': 1, // Unexpected var, use let or const instead，该规则旨在阻止使用var或鼓励使用const或let代替。
    'no-console': 0, // 此规则不允许调用console对象的方法。
    // 'no-redeclare': 2, // 此规则旨在消除在同一范围内具有多个声明的变量。
    // 'no-unused-expressions': [2, { allowShortCircuit: true }], // 期望一个赋值或函数调用，却看到了一个表达式，允许&&
    // 'array-callback-return': [2, { allowImplicit: false }], // expects a return value from arrow function.期望箭头函数的返回值。
  },
};
