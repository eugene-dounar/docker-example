Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.synced_folder ".", File.dirname(__FILE__), type: "rsync"

  config.vm.provider "virtualbox"

  config.vm.network "forwarded_port", guest: 2375, host: 2375

  config.vm.provision "docker"

  config.vm.provision "shell",
    inline: "cp " << File.dirname(__FILE__) << "/vagrant-provision/etc_default_docker /etc/default/docker && service docker restart"
end
