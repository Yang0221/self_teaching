import os
from openai import OpenAI
#需要 pip install openai 安装后可用
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# 把api——key 的值设置为 自己获取的 ，或者需要写入环境变量里让sdk 查找
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "user", "content": "Tell me a story about a unicorn."}
    ]
    # 这里需要更改的是 ：后面的句子为设定人设
)
print(response.choices[0].message.content)
