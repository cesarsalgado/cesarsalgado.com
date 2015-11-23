import os
import sys
import re

def make_modifications(text, file_name):
    text = text[text.find('\n')+1:]
    img_pattern = "![notebook_image]("
    text = re.sub(r'([^\(])(https?://[^\s$]+)([^\)])', r'\1[\2](\2)\3', text)
    text = text.replace(img_pattern, img_pattern+'notebooks/')
    end = file_name.rfind('-')
    start = file_name.rfind('-', 0, end)+1
    title = file_name[start:end].replace('_', ' ').title().replace('Ipython', 'IPython').replace(' On ', ' on ')
    text = "---\ntitle: {title}\npublished: false\ncomments: false\n---\n\n".format(title=title) + text
    notebook_url = "https://github.com/cesarsalgado/cesarsalgado.github.io/blob/master/middleman/source/posts/notebooks/" + file_name + '.ipynb'
    text = text + "\n\n<sub>**Post generated from the following IPython Notebook**: [{notebook_url}]({notebook_url})</sub>".format(notebook_url=notebook_url.replace('_', '\_'))
    return text

def main():
    ipynb_file_name = sys.argv[1]
    cmd1 = "ipython nbconvert --to markdown {ipynb_file_name}".format(ipynb_file_name=ipynb_file_name)
    os.system(cmd1)
    file_name = ipynb_file_name[:-6]
    erb_file_path = "../{file_name}.markdown.erb".format(file_name=file_name)
    cmd2 = "mv {file_name}.md {erb_file_path}".format(file_name=file_name, erb_file_path=erb_file_path)
    os.system(cmd2)
    with open(erb_file_path, 'r') as f:
        text = f.read().strip()
    text = make_modifications(text, file_name)
    with open(erb_file_path, 'w') as f:
        f.write(text)

if __name__ == "__main__":
    main()
