from pathlib import Path
import os

base_dir = Path("./test")


def read_file(name: str) -> str:
    # Return file content. If not exist, return error message.
    print(f"(read_file {name})")
    try:
        with open(base_dir /name,"r") as f:
            content = f.read()
        return content
    except Exception as e:
        return f"An error occurred :{e}"
def list_files() -> list[str]:
    print("(list_file)")
    file_list: list[Any] = []
