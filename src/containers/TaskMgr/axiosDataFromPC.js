export const dataFromPc = () => {

    const valueCpu = Math.floor(Math.random() * 100)
    const valueRam = Math.floor(Math.random() * 100)
    const valueDisk = Math.floor(Math.random() * 100)
    const valueNetwork = Math.floor(Math.random() * 100)

    return {
        detailProcessData: [
            {
                processName: 'Google Chrome',
                cpu: valueCpu,
                memory: valueRam,
                disk: valueDisk,
                network: valueNetwork
            }
        ],
    average: {
        cpu: valueCpu,
        memory: valueRam,
        disk: valueDisk,
        network: valueNetwork
    }
  }
}
