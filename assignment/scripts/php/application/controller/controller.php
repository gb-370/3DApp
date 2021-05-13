<?php

class Controller {
    public $load;
    public $model;

    function __construct($pageURI = null) {
        $this->load = new Load();
        $this->model = new Model();
        $this->$pageURI();
    }

    function home() {
        $data = $this->model->model3D_info();
        $this->load->view('view3DAppTest_2', $data);
    }

    function apiCreateTable() {
        $data = $this->model->dbCreateTable();
        $this->load->view('viewMessage', $data);
    }

    function apiInsertData() {
        $data = $this->model->dbInsertData();
        $this->load->view('viewMessage', $data);
    }

    function apiGetDataCoke() {
        $data = $this->model->dbGetData(1);
        $this->load->view('view3DAppData', $data);
    }

    function apiGetDataSprite() {
        $data = $this->model->dbGetData(2);
        $this->load->view('view3DAppData', $data);
    }

    function apiGetDataPepper() {
        $data = $this->model->dbGetData(3);
        $this->load->view('view3DAppData', $data);
    }
}
?>