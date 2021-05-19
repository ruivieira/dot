FROM fedora:34

RUN useradd -ms /bin/bash ruivieira
ENV HOME /root
WORKDIR /root
RUN dnf install -y curl
RUN sh -c "$(curl -fsLS git.io/chezmoi)" -- init --apply ruivieira/dot -k
