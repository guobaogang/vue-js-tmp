import cliImg from '@/static/cli.png';

export default {
    title: '脚手架',
    desc: `在项目开发的过程中，经常会遇到一些重复的工作，比如每一个新项目都要从头搭建一个工程，或者很多组件都是同一套代码结构。
    这个时候就可以用脚手架省去这些重复工作，将已经成熟的工程或者组件做成模板，用一套代码进行管理。`,
    children: [{
        title: '创建脚手架项目',
        children: [{
            title: '初始化',
            desc: '通过npm init初始化package.json'
        }, {
            title: '修改配置',
            desc: `package.json有以下几个需要注意的配置<br>
            <ul>
                <li>
                <code>name</code>: 该脚手架的名称，也是后面通过npm命令安装时的唯一标识。
                </li>
                <li>
                <code>bin</code>: 脚手架的可执行命令。
                </li>
                <li>
                <code>repository</code>: 关联仓库，一般关联到脚手架上传的git项目上。
                </li>        
            </ul>`,
            code: `
            {
                "name": "gbg-cli",
                "version": "0.0.1",
                "description": "",
                "main": "index.js",
                "scripts": {
                  "test": "echo "Error: no test specified" && exit 1"
                },
                "bin": {
                  "gbg": "./bin/gbg"
                },
                "author": "guobaogang",
                "license": "ISC",
                "dependencies": {
                  "commander": "^6.0.0"
                },
                "repository": {
                  "type": "git",
                  "url": "https://github.com/guobaogang/gbg-cli.git"
                }
              }
              
            `
        }, {
            title: '添加模板',
            desc: '将项目工程放到template文件夹中，以备使用。'
        }, {
            title: '编写README文件',
            desc: `用户使用文件，介绍如何安装和使用，有哪些命令和功能等等`,
            code: `
            ### GBG-CLI

            Usage: gbg <command>

            Options:
            -V, --version  output the version number
            -h, --help     output usage information

            Commands:
            init|i         初始化
            list|l         显示模板列表
            \`\`\`

            ### install

            \`\`\`
            npm i ncchr -g
            \`\`\`

            ### ncchr i

            > 运行\`ncchr i\`,输入项目名称和需要下载的模板
            `
        }, {
            title: '配置bin',
            desc: `上文中配置了脚手架的可执行文件为/bin/gbg，则需要在项目中创建bin目录和gbg文件。<br>
            可以直接在文件中引用lib目录下的js文件，在lib目录中统一管理。<br>
            需要特别注意的是，文件头部的#!/usr/bin/env node --harmony是运行环境，不可缺少。`,
            code: `
            #!/usr/bin/env node --harmony

            require("../lib/index");
            `
        }, {
            title: '编写脚本',
            desc: `执行node命令，需要用到最基础的插件<a target=_blank href=https://github.com/tj/commander.js>commander</a>,通过npm命令安装（下同）。先上代码,此代码为上文中引用的/lib/index.js`,
            code: `
            const program = require('commander');

            program
            .version(require('../package.json').version)
            program
                .usage('<command>')
            program
                .command('list')
                .description('模板列表')
                .alias('l')
                .action(() => {
                    require('../lib/list')()
                })
            program
                .command('init')
                .description('初始化')
                .alias('i')
                .action(() => {
                    require('../lib/init')()
                })
            program.parse(process.argv)
            if (!program.args.length) {
                program.help()
            }
            `
        }, {
            desc: `
            一些简单的命令介绍，具体可以参考<a target=_blank href=https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md>commander 文档</a>
            <ul>
                <li>
                <code>parse</code>: 用来解析用户参数。
                </li>
                <li>
                <code>version</code>: 脚手架版本，一般取自package.json的version,注意每次上传到npm的时候都需要更改。
                </li>
                <li>
                <code>usage</code>: 用户使用提示,取自README.md。
                </li>
                <li>
                <code>command</code>: 自定义的执行命令,比如定义了list命令,可以通过gbg list触发。
                </li>   
                <li>
                <code>description</code>: 自定义执行命令的描述。
                </li>   
                <li>
                <code>alias</code>: 自定义执行命令的缩写，比如list命令可以缩写为gbg l执行。
                </li>  
                <li>
                <code>action</code>: 运行命令后的触发动作。
                </li>  
            </ul>
            `
        }, {
            title: '执行动作',
            desc: `以init命令为例，触发该命令之后，开始询问用户需要创建的项目名称，需要拷贝的模板，之后根据用户输入创建项目文件夹，并将项目模板拷入。<br>
                创建问题可以通过<a href=https://www.npmjs.com/package/inquirer target=_blank>inquirer</a>组件来实现。
            `,
            code: `
                const inquirer = require('inquirer');

                createQuestion() {
                    const questions = [
                        {
                            type: 'input',
                            name: 'filename',
                            message: '请输入要创建的文件名：',
                            validate: function (value) {
                                var filePath = value.match(/\\w+/);
                                if (filePath) {
                                    return true;
                                }
                                return '请输入正确的文件名称(数字文字下划线)';
                            }
                        },
                        {
                            type: 'rawlist',
                            name: 'templName',
                            message: '请选择模板?',
                            choices: config
                        },
                        {
                            type: 'rawlist',
                            name: 'jsType',
                            message: '请选择语言类型?',
                            choices: ['javascript', 'typescript']
                        },
                    ];
                    return inquirer.prompt(questions)
                }
                
                createQuestion().then(res => {
                    let projectName = path.join(process.cwd(), res.filename)
                    let templName = res.templName + '-' + (res.jsType === 'typescript' ? 'ts' : 'js')
                    console.log('project info: ', res)
                    copyTempl(projectName, templName)
                })
            `
        }, {
            title: '拷贝模板',
            desc: '确定了需要拷贝的模板之后，应用fs拷贝模板中的文件到项目目录中，即上文中的copyTempl方法。',
            code: `
                copyTempl(name, templName = null) {
                    let desPath = path.join(__dirname, '../template/' + templName)
                    let desName = name
                    this.copyDir(desPath, desName)
                }

                copyDir(src, dist, callback) {
                    const oPath = path;
                    const StaticPath = process.cwd();
                    fs.access(dist, function (err) {
                        if (err) {
                            // 目录不存在时创建目录
                            fs.mkdirSync(dist, { recursive: true });
                        }
                        _copy(null, src, dist);
                    });
            
                    const _copy = (err, src, dist) => {
                        if (err) {
                            callback(err);
                        } else {
                            let dir = fs.readdirSync(src, 'utf-8');
                            for (let j of dir) {
                                var _src = src + '/' + j;
                                var _dist = dist + '/' + j;
                                let stat = fs.statSync(_src);
                                if (stat.isDirectory()) {
                                    this.copyDir(_src, _dist, callback);
                                } else {
                                    fs.writeFileSync(_dist, fs.readFileSync(_src, { encoding: 'utf-8' }));
                                }
                            }
                        }
                    }
                }
            `
        }]
    }, {
        title: '本地测试',
        desc: '编写完上面代码之后，在架手架根目录下执行npm link，就可以在本地运行该脚手架'
    }, {
        title: '上传npm',
        desc: '本地测试完成之后，就可以上传到<a href=https://www.npmjs.com target=_blank>npm</a>上，之后就可以随时通过npm install -g安装使用了。',
        children: [{
                title: '创建npm账号',
                desc: '去 npm 官网注册一个账号。记得激活，不然提交的时候会报错。'
            },
            {
                title: '登录npm',
                desc: '登录之前一定先检查npm是否配置了淘宝镜像，如果配置了需要先切换回来。',
                code: `
                //获取npm镜像配置
                npm config get registry
                //设置npm镜像
                npm config set registry http://registry.npmjs.org/
                //设置淘宝镜像
                //npm config set registry https://registry.npm.taobao.org
                //登录npm
                npm login`
            },
            {
                title: '上传',
                desc: '在脚手架的根目录运行npm publish即可。',
                code: 'npm publish'
            }, {
                title: '测试',
                desc: '先在脚手架的根目录运行npm unlink gbg解除本地测试，然后通过npm install gbg-cli -g安装脚手架测试。'
            }
        ]
    }, {
        title: '执行效果',
        image: cliImg
    }, {
        title: '代码地址',
        desc: `npm地址：<a href=https://www.npmjs.com/package/gbg-cli target=_blank>https://www.npmjs.com/package/gbg-cli</a><br>
               git地址：<a href=https://github.com/guobaogang/gbg-cli target=_blank>https://github.com/guobaogang/gbg-cli</a>`
    }]
}