import ACEV2Storage from "../services/ACEV2Storage";
import Clock from "../services/Clock";

class Preferences {
    updatePreferences({category, k, v}: { category: string, k: string, v: string }) {
        let currentPreferences = ACEV2Storage.getRuntimeStorage().monkey.preferences
        if (currentPreferences[category]) {
            currentPreferences[category][k] = v
        }
    }

    getPreference({category, k}: { category: string, k: string }) {
        let currentPreferences = ACEV2Storage.getRuntimeStorage().monkey.preferences
        if (currentPreferences[category]) {
            return currentPreferences[category][k] as string
        } else {
            return ''
        }
    }

    isDarkMode() {
        if (this.getPreference({category: 'visual', k: 'theme'}) === 'auto') {
            return Clock.isNight()
        } else return this.getPreference({category: 'visual', k: 'theme'}) === 'dark';
    }

    getBridgeConfigurations(): bridgeConfigurations {
        let currentPreferences = ACEV2Storage.largeGet({k: 'bridgeConfigurations'})
        if (!currentPreferences) {
            ACEV2Storage.largeSet({
                k: 'bridgeConfigurations',
                v: {
                    enabled: true,
                    pluginLoadOrder: 'when-body-loaded',
                    connect: 'localhost',
                }
            })
            return {
                enabled: true,
                pluginLoadOrder: 'when-body-loaded',
                connect: 'localhost',
            }
        }
        return currentPreferences as bridgeConfigurations
    }

    updateBridgePreferences({newBridgeConfigurations}: { newBridgeConfigurations: bridgeConfigurations }) {
        ACEV2Storage.largeSet({k: 'bridgeConfigurations', v: newBridgeConfigurations})
    }
}

export default new Preferences();