import imaplib
import email
from email.header import decode_header

def get_all_emails():
    def filter_from(string: str):
        string = string.split(' <')[0]
        string = string.replace('"', '').rstrip()
        return string

    username = "5736@tiffin.kingston.sch.uk"
    password = "Mars123!"

    imap = imaplib.IMAP4_SSL("imap-mail.outlook.com")
    imap.login(username, password)

    _, messages = imap.select("INBOX")
    N = 9
    messages = int(messages[0])

    lis = []
    for index, i in enumerate(range(messages, messages-N, -1)):
        # fetch the email message by ID
        res, msg = imap.fetch(str(i), "(RFC822)")
        for response in msg:
            if isinstance(response, tuple):
                # parse a bytes email into a message object
                msg = email.message_from_bytes(response[1])
                # decode the email subject
                subject, encoding = decode_header(msg["Subject"])[0]
                if isinstance(subject, bytes):
                    # if it's a bytes, decode to str
                    subject = subject.decode(encoding)
                # decode email sender
                From, encoding = decode_header(msg.get("From"))[0]
                if isinstance(From, bytes):
                    From = From.decode(encoding)
                dic = {
                    "id": index,
                    "subject": subject,
                    "from": filter_from(From)
                }
                lis.append(dic)
    return lis
                