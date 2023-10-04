from socket import *
# 1 - Importa o módulo que permite a criação de sockets em Python.

serverName = gethostbyname(gethostname())
serverPort = 12000
# 2 - Configurações de Host:
# 2.1 - IP do servidor ou nome do hospedeiro. Se for usado um nome de hospedeiro, será feita uma pesquisa DNS para obter o endereço IP.
# 2.2 - Porta do servidor.

clientSocket = socket(AF_INET, SOCK_DGRAM)
# 3 - Cria o socket do cliente. O parâmetro AF_INET indica que a rede está usando IPV4. O parâmetro SOCK_DGRAM indica que é um socket UDP

while True: 
# 4 - Laço que repetirá infinitamente.

    message = input('Escreva alguma coisa: ')
    # 5 - Solicita um input ao usuário do cliente.

    clientSocket.sendto(message.encode(), (serverName, serverPort))
    # 6 - A partir do endereço de destino (serverName, serverPort), envia um pacote ao servidor contendo o input escrito.

    modifiedMessage, serverAddress = clientSocket.recvfrom(2048)
    # 7 - Armazena o conteúdo e o endereço de pacotes recebidos. O parâmetro da função 'recvfrom' é um inteiro contendo o tamanho do buffer.

    print('Recebido: ' + modifiedMessage.decode())
    # 8 - Imprime o conteúdo recebido.
