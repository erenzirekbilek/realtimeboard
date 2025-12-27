from rest_framework import exceptions

def check_user_token(token: str):
    """
    Basit token kontrolü
    """
    if token != "expected_token":
        raise exceptions.PermissionDenied("Invalid token")
    return True
