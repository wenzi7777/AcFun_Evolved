class Version {
    private currentVersion: string;
    private versionTag: versionTag;
    private environment: environment

    constructor() {
        this.currentVersion = '2.0.1';
        this.versionTag = 'Public Stable';
        this.environment = 'Production';
    }

    getCurrentVersion(): string {
        return this.currentVersion + ' ' + this.versionTag
    }

    getVersionTag(): versionTag {
        return this.versionTag
    }

    getEnvironment(): environment {
        return this.environment
    }

    getFullVersion(): string {
        return this.currentVersion + ' ' + this.environment + ' ' + this.versionTag;
    }

    setCurrentVersion({version}: { version: string }): void {
        this.currentVersion = version;
    }

    setVersionTag({tag}: { tag: versionTag }): void {
        this.versionTag = tag;
    }

    setEnvironment({env}: { env: environment }): void {
        this.environment = env;
    }

    parseVersion({version}: {version: string}): { major: number, minor: number, patch: number, tag: versionTag } {
        let versionNumber = version.split(' ')[0]
        let tag = version.split(' ')[1] + ' ' + version.split(' ')[2]
        const [major, minor, patch] = versionNumber.split('.').map(Number);

        return {
            major,
            minor,
            patch,
            tag: tag as versionTag
        };
    }

    tagPriority({tag}: {tag: versionTag}): number {
        switch (tag) {
            case 'Public Stable':
                return 4;
            case 'Developer Stable':
                return 3;
            case 'Public Beta':
                return 2;
            case 'Developer Beta':
                return 1;
            default:
                return 0;
        }
    };

    targetTagPriority({tag, target}: {tag: versionTag, target: target}): number {
        if (target === 'stable') {
            return tag === 'Public Stable' || tag === 'Developer Stable' ? this.tagPriority({tag}) : 0;
        } else {
            return tag === 'Public Beta' || tag === 'Developer Beta' ? this.tagPriority({tag}) : 0;
        }
    }

    compareVersion({version1, version2, target}: {version1: string, version2: string, target: target}): number {
        const parsedVersion1 = this.parseVersion({version: version1});
        const parsedVersion2 = this.parseVersion({version: version2});

        if (parsedVersion1.major !== parsedVersion2.major) {
            return parsedVersion1.major - parsedVersion2.major;
        }
        if (parsedVersion1.minor !== parsedVersion2.minor) {
            return parsedVersion1.minor - parsedVersion2.minor;
        }
        if (parsedVersion1.patch !== parsedVersion2.patch) {
            return parsedVersion1.patch - parsedVersion2.patch;
        }

        return this.targetTagPriority({tag: parsedVersion1.tag, target}) - this.targetTagPriority({tag: parsedVersion2.tag, target});
    }

}

export default new Version();
