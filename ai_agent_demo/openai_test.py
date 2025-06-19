from langchain.llms import OpenAI
llm = OpenAI(model="gpt-3.5-turbo-instruct")
print(llm("AI Agent是什么？"))