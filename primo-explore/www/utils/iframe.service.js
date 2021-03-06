/**
 * Created by shoulm on 06/02/2018.
 */
class IframeService{
    constructor($sce, $location, configurationService){
        this.$sce = $sce;
        this.$location = $location;
        this.configurationService = configurationService;
        this._up = false;
    }

    get config(){
        return this.configurationService.config;
    }

    get nuiIframeElement(){
        if (!this._nuiIFrameElement){
            let iframeElement= document.getElementById('primo-explore-iframe');
            this._nuiIFrameElement= iframeElement;
        }
        return this._nuiIFrameElement;
    }

    refreshNuiIFrame(){
        if (!this.nuiIframeElement){
            return;
        }
        this.nuiIframeElement.src = this.nuiIframeElement.src;
    }

    getIframeUrl(){
        return this.$sce.trustAsResourceUrl(this.$location.protocol() + '://' + this.$location.host() + ':8003/primo-explore/search/?vid='+this.config.view+'&dirName='+this.config.dirName+'&url='+this.config.url);
    }
    isUp(){
        return this._up;
    }

    set up(newVal){
        this._up= newVal;
    }
}
IframeService.$inject= ['$sce', '$location', 'configurationService'];


module.exports = {
    name: 'iframeService',
    service: IframeService
}


