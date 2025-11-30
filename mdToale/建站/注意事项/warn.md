1.首先服务器上应该安装的有git
  打开服务器的终端：执行命令 sudo yum install git -y
  测试是否安装成功 git --version
2.服务器上必须安装node.js
curl -fsSL rpm.nodesource.com | sudo bash -
sudo yum install nodejs -y
3.workflows配置
  要判断.git目录是否存在 没有的话要生成
4.如果是vite构建的话，也需要更换ymle文件

5.fatal: detected dubious ownership in repository at '***'
To add an exception for this directory, call:
	git config --global --add safe.directory ***
Installing dependencies and building Vite app...
这个错误表示 Git 命令的执行用户与服务器上该 Git 仓库目录的实际所有者不匹配。出于安全考虑，Git 在 2.35.2 及更高版本中引入了一个安全措施 (CVE-2022-24765)，防止在一个不属于当前用户的目录中运行 Git 命令。 
虽然日志最终显示 "Deployment and build finished successfully"（部署和构建成功完成），但这可能意味着 Git 命令本身失败后，脚本的后续步骤（例如 Node.js 包安装和 Vite 构建）继续运行并完成了，但核心的代码拉取或更新步骤并没有执行成功。
解决方案
# 在服务器上运行以下命令（将 '/path/to/your/repository' 替换为红框中的实际路径）
git config --global --add safe.directory /path/to/your/repository
git config --global --list
safe.directory=/path/to/your/repository
成功解决