import json

def format_message(user: str, content: str):
    """
    Mesajı standart JSON formatına çevir
    """
    return json.dumps({
        "user": user,
        "content": content
    })
